package com.apirest.rest_api.service;

import org.springframework.stereotype.Service;

@Service
public class FibonacciService {
    public int[] isFibonacci(String number){
        int n = Integer.parseInt(number);

        int[] fibonacciArray = new int[n];

        if (n > 0) {
            fibonacciArray[0] = 0;
        }
        if (n > 1) {
            fibonacciArray[1] = 1;
        }

        for (int i = 2; i < n; i++) {
            fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
        }
        return fibonacciArray;
    }
}
