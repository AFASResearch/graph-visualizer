export interface State {
  offset: { x: number; y: number };
  zoom: number;
  visibleNodes: {
    key: string;
    x: number;
    y: number;
  }[];
  sidebar: "list" | undefined;
}
