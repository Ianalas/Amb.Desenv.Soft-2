package com.apirest.rest_api.service;
import org.springframework.stereotype.Service;

@Service
public class MaxDivComService {
    public int isMDC(int a, int b){
        int div = 0, maior;

        if(a>b){
            maior = a;
        }else{
            maior = b;
        }
        for (int i=1; i <= maior; i++){
            if(a%i == 0 && b%i == 0){
                div = i;
            }
        }
       return div;
    }
}
