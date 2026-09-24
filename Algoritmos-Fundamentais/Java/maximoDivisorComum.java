import java.util.Scanner;

public class maximoDivisorComum {
    public static int mdc(int a, int b) {
        a = Math.abs(a);
        b = Math.abs(b);

        while (b != 0) {
            int resto = a % b;
            a = b;
            b = resto;
        }

        return a;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o primeiro inteiro: ");
        int a = scanner.nextInt();

        System.out.print("Digite o segundo inteiro: ");
        int b = scanner.nextInt();

        int resultado = mdc(a, b);

        System.out.println("O MDC de " + a + " e " + b + " é: " + resultado);

        scanner.close();
    }
}