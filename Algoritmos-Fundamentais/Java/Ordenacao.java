import java.util.Arrays;

public class Ordenacao {

    public static void quicksort(int[] vetor, int inicio, int fim) {
        if (inicio < fim) {
            int indicePivo = particionar(vetor, inicio, fim);
            quicksort(vetor, inicio, indicePivo - 1);
            quicksort(vetor, indicePivo + 1, fim);
        }
    }

    private static int particionar(int[] vetor, int inicio, int fim) {
        int pivo = vetor[fim];
        int i = inicio - 1;

        for (int j = inicio; j < fim; j++) {
            if (vetor[j] <= pivo) {
                i++;
                trocar(vetor, i, j);
            }
        }

        trocar(vetor, i + 1, fim);
        return i + 1;
    }

    private static void trocar(int[] vetor, int i, int j) {
        int auxiliar = vetor[i];
        vetor[i] = vetor[j];
        vetor[j] = auxiliar;
    }

    public static void main(String[] args) {
        int[] numeros = {8, 2, 9, 4, 7, 1, 3, 6, 5};

        System.out.println("Antes: " + Arrays.toString(numeros));

        quicksort(numeros, 0, numeros.length - 1);

        System.out.println("Depois: " + Arrays.toString(numeros));
    }
}