import { OpenAIStream, OpenAIStreamPayload } from "@/utils/openai/OpenAIStream";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing env var from OpenAI");
}

const config = {
  runtime: "edge",
};


const POST = async (req: Request): Promise<Response> => {
  const { prompt } = (await req.json()) as {
    prompt?: string;
  };
  

  if (!prompt) {
    return new Response("No prompt in the request", { status: 400 });
  }


  // const configuration = new Configuration({
  //   apiKey: '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',
  // });


  const payload: OpenAIStreamPayload = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 1000,
    stream: true,
    n: 1,
  };

  
  const stream = await OpenAIStream(payload);
  return new Response(
    stream, {
      headers: new Headers({
        'Cache-Control': 'no-cache',
      })
    }
  );
};

export {POST, config};
