export class Emulator {
  static bankCardPurchase(amount: number, cb: () => void, message: string) {
    this.display_cb(message)
  }
  static display_cb(message: string) {
    console.log(message)
  }

  static startCashIn() {}
  static stopCashIn() {}
}
