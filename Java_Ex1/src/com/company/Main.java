package com.company;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        double p;
        double R;
        int n;
        do {
            try {
                System.out.println("Nhập số tiền vay: ");
                p = Double.parseDouble(s.nextLine());
                if (p > 0) {
                    break;
                } else {
                    System.out.println("Vui lòng nhập số > 0.");
                }
            } catch (Exception e) {
                System.out.println("Vui lòng nhập chính xác!");
            }
        } while (true);
        do {
            try {
                System.out.println("Nhập lãi xuất năm: ");
                R = Double.parseDouble(s.nextLine());
                if (R > 0) {
                    break;
                } else {
                    System.out.println("Vui lòng nhập số > 0.");
                }
            } catch (Exception e) {
                System.out.println("Vui lòng nhập chính xác!");
            }
        } while (true);
        do {
            try {
                System.out.println("Nhập kỳ hạn vay theo năm: ");
                n = Integer.parseInt(s.nextLine());
                if (n > 0) {
                    break;
                } else {
                    System.out.println("Vui lòng nhập số > 0.");
                }
            } catch (Exception e) {
                System.out.println("Vui lòng nhập chính xác!");
            }
        } while (true);
        double r = R / 100 / 12;
        double M = p * r * Math.pow((1 + r), n) / (Math.pow((1 + r), n) - 1);
        System.out.printf("Số tiền trả nợ hàng tháng là: %.1f", M);
    }
}
