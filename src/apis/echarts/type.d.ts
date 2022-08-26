export namespace IGetBarChartData {
  interface ValueItem {
    month: string
    value: string | number
  }
  interface Data {
    name: string
    type: string
    value: ValueItem[]
  }
}
