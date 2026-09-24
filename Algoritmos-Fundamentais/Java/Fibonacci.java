import java.util.Scanner;

public class Fibonacci {

    public static int fibonacci(int n) {
        if (n == 0) return 0;
        if (n == 1) return 1;

        int anterior = 0;
        int atual = 1;

        for (int i = 2; i <= n; i++) {
            int proximo = anterior + atual;
            anterior = atual;
            atual = proximo;
        }

        return atual;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite N (N > 1): ");
        int n = scanner.nextInt();

        if (n <= 1) {
            System.out.println("N deve ser maior que 1.");
            return;
        }

        System.out.print("Sequência de Fibonacci até o termo " + n + ": ");
        for (int i = 0; i < n; i++) {
            if (i > 0) {
                System.out.print(", ");
            }
            System.out.print(fibonacci(i));
        }

        System.out.println();
        System.out.println("O " + n + "º termo da sequência é: " + fibonacci(n - 1));
    }
}