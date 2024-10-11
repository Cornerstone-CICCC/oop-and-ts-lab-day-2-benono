// Create a class decorator `InjectTimestamp` that adds a `timestamp` property to a class.
// The decorator should modify the class so that every time an instance is created, it has the current timestamp.

function InjectTimestamp<T extends { new (...args: any[]): {} }>(
  target: T,
  context: ClassDecoratorContext
) {
  return class extends target {
    timestamp = new Date();
  };
}

@InjectTimestamp
class ReportClass {
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

// Expected output (when creating a new instance):
const report = new ReportClass("Quarterly Report");
console.log(report.title); // "Quarterly Report"
console.log(report); // current date and time
