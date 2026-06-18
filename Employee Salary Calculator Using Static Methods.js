import java.util.Scanner;
public class SalaryCalculator {
    public static double calculateGross(double basic, double allowance) {
        return basic + allowance;
    }
    public static double calculateDeductions(double deduction) {
        return deduction;
    }
    public static double calculateNet(double gross, double deduction) {
        return gross - deduction;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double basicSalary = sc.nextDouble();
        double allowance = sc.nextDouble();
        double deduction = sc.nextDouble();

        double grossSalary = calculateGross(basicSalary, allowance);
        double totalDeduction = calculateDeductions(deduction);
        double netSalary = calculateNet(grossSalary, totalDeduction);

        System.out.println("Gross Salary = " + (int) grossSalary);
        System.out.println("Net Salary = " + (int) netSalary);
    }
}
