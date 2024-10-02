package com.apirest.rest_api.service;
import org.springframework.stereotype.Service;

@Service
public class QuickSortService {

    public int[] isQuickSort(int[] numeros){
        int n = numeros.length;
        for (int j = 0; j < n - 1; j++) {
            for (int i = 0; i < n - 1 - j; i++) {
                if (numeros[i] > numeros[i + 1]) {
                    int aux = numeros[i];
                    numeros[i] = numeros[i + 1];
                    numeros[i + 1] = aux;
                }
            }
        }

        return numeros;
    }
}
