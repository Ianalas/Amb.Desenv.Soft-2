package com.apirest.rest_api.domain;

public class Primo {
    private String numero;

    public Primo() { //Feito para tirar a serialização
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = String.valueOf(numero);
    }
}
