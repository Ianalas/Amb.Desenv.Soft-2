package com.apirest.rest_api.domain;

public class Fibo {
    private String numero;

    public Fibo() {
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = String.valueOf(numero);
    }
}
