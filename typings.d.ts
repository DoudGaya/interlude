interface Plans {
  id: string;
  name: string;
  length: {
      id: string;
      workTime: string;
      restTime: string;
  }[];
}[]