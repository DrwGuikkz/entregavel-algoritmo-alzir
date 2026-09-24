import java.util.Scanner;

public class Contagem {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = scanner.nextInt();
        int[] dados = new int[n];

        for (int i = 0; i < n; i++) {
            dados[i] = scanner.nextInt();
        }

        // Considera o primeiro e o último dado como os limites do intervalo
        int inicio = dados[0];
        int fim = dados[n - 1];

        int menor = Math.min(inicio, fim);
        int maior = Math.max(inicio, fim);

        int quantidade = 0;

        for (int valor : dados) {
            if (valor >= menor && valor <= maior) {
                quantidade++;
            }
        }

        System.out.println(quantidade);
    }
}