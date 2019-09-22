export interface IChartData {
    x?: string;
    y?: number
}
export interface ISeries {
    name?: string;
    data: IChartData[]
}
