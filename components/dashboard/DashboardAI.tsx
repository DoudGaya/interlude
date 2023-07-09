import { useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import LoadingDots from "@/components/openai/LoadingDots";
import {
    createParser,
    ParsedEvent,
    ReconnectInterval,
} from "eventsource-parser";

interface Promt {
    id: number;
    selection: string
    text: string;
}

const prompts: Promt[] = [
    {
        id: 1,
        selection: 'productivity',
        text: 'Random productivity Tip'
    },
    {
        id: 2,
        selection: 'healthy',
        text: 'Healthy work advice'
    },
    {
        id: 3,
        selection: 'recommendation',
        text: 'Recommended break time'
    },

]



const DashboardAI = () => {

    const [loading, setLoading] = useState(false);
    const [tipGen, setTipGen] = useState("");
    const [selection, setSelection] = useState<string>("productivity");
    const [generatedTips, setGeneratedTips] = useState<String>("");

    const tipRef = useRef<null | HTMLDivElement>(null);

    const scrollToTips = () => {
        if (tipRef.current !== null) {
        tipRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

  const prompt = `Generate 2 random ${selection} tips for a desk worker clearly labeled "1." and "2.". ${
    selection === "productive"
      ? "Make sure the tips is talking about how you can be productive at work" :
      (selection === "healthy") 
      ? "make sure the tips talks about how you can create a healthy work habit":
      (selection === 'recommendation') 
      ? "give your recommendation on how can a desk worker creates a " 
       : null
  }
      Make sure each generated tips are less than 200 characters with short sentences and base them on the following work description: ${tipGen}${
    tipGen.slice(-1) === "." ? "" : "."
  }`;

  const generateTip = async (e: any) => {
    e.preventDefault();
    setGeneratedTips("");
    setLoading(true);
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const onParse = (event: ParsedEvent | ReconnectInterval) => {
      if (event.type === "event") {
        const data = event.data;
        try {
          const text = JSON.parse(data).text ?? ""
          setGeneratedTips((prev) => prev + text);
        } catch (e) {
          console.error(e);
        }
      }
    }

    // https://web.dev/streams/#the-getreader-and-read-methods
    const reader = data.getReader();
    const decoder = new TextDecoder();
    const parser = createParser(onParse);
    let done = false;
    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      parser.feed(chunkValue);
    }
    scrollToTips();
    setLoading(false);
  };


  return (
      <div className=" flex flex-col py-4 border rounded-xl border-gray-400 dark:border-gray-600 px-6 w-full min-h-full justify-between">
        <p className=" font-logo pb-4 mx-auto">Generate random productivity tip based on the nature of your work</p>
          <div className=" grid grid-cols-3 border-y border-gray-400 dark:border-gray-600 py-3 px-2 flex-row space-x-6 ">
           {
            prompts.map(single => {
                return (
                    <>
                     <button key={single.id} onClick={() => setSelection(single.selection)} className={`hover:bg-primary/50 dark:hover:bg-primary/50 flex-none rounded border ${(selection === single.selection) ? 'border-primary bg-primary text-white font-semibold dark:border-primary' : 'border-gray-400 dark:border-gray-600'}  px-6 py-1 text-sm`}>
                        {single.text}
                    </button>
                    </>
                )
            })
           }

          </div>
          <div className=" flex  h-full py-2">
          {generatedTips && (
            <>
              <div>
                <h2
                  className="sm:text-4xl text-3xl font-bold text-slate-900 mx-auto"
                  ref={tipRef}
                >
                  Your generated Tips
                </h2>
              </div>
              <div className="space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto">
                {generatedTips
                  .substring(generatedTips.indexOf("1") + 3)
                  .split("2.")
                  .map((generatedTips) => {
                    return (
                      <div
                        className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border"
                        onClick={() => {
                          navigator.clipboard.writeText(generatedTips);
                          toast("copied to clipboard", {
                            icon: "✂️",
                          });
                        }}
                        key={generatedTips}
                      >
                        <p>{generatedTips}</p>
                      </div>
                    );
                  })}
              </div>
            </>
          )}
          </div>
          <div className="border border-gray-600 flex w-full items-center ">
             <input
             value={tipGen}
             placeholder="Describe the nature of your work..."
             onChange={(e) => setTipGen(e.target.value)}
             type="text" className=" w-4/5 py-3 outline-none px-4 bg-transparent" />

                {!loading && (
                <button
                className=" w-1/5 justify-center flex items-center space-x-2 bg-emerald-600 px-4 py-3 text-white"
                onClick={(e) => generateTip(e)}
                >
                <span>Generate</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </button>
                )}
                {loading && (
                    <button
                    className=" w-1/5 justify-center h-full flex items-center space-x-2 bg-emerald-600 px-4 py-3 text-white"
                    disabled
                    >
                    <LoadingDots color="white" style="large" />
                    </button>
                )}
          </div>
      </div>
  )
}

export default DashboardAI
