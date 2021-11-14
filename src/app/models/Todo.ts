interface TodoInterface {
  title: string;
  isCompleted: boolean;
}

export class Todo implements TodoInterface {
  title!: string;
  isCompleted!: boolean;
}
