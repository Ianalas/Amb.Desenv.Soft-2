package com.apirest.rest_api.Controller;
import com.apirest.rest_api.domain.*;
import com.apirest.rest_api.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
public class HelloWorldController {
    @Autowired
    private HelloWorldService helloWorldService;
    @Autowired
    private NumPrimoService numPrimoService;
    @Autowired
    private FibonacciService fibonacciService;
    @Autowired
    private ContagemService contagemService;
    @Autowired
    private SomaConjNumService somaConjNumService;
    @Autowired
    private QuickSortService quickSortService;
    @Autowired
    private MaxDivComService maxDivComService;


    @GetMapping
    public String helloWorld(){
        return helloWorldService.helloName("Maria");
    }
    @PostMapping("/q")
    public String helloWorldPost(@RequestBody User body){
        return "Hello Post " + body.getName() +" "+ body.getEmail();
    }


    @CrossOrigin(origins = "http://localhost:3300")
    @PostMapping("/primo")
    public String primoTeste(@RequestBody Primo body){
        String result = numPrimoService.isPrimo(body.getNumero());

        return result;
    }

    @PostMapping("/fibo")
    public int[] fiboTeste(@RequestBody Fibo body){
        int[] result = fibonacciService.isFibonacci(body.getNumero());

        return result;
    }

    @PostMapping("/cont")
    public int contTeste(@RequestBody Contagem body){
        int result = contagemService.isCont(body.getNumeros());
        return result;
    }

    @PostMapping("/scn")
    public int somaTeste(@RequestBody SomaConjNum body){
        int result = somaConjNumService.isSomar(body.getNumeros());
        return result;
    }

    @PostMapping("/sort")
    public int[] quickSortTeste(@RequestBody QuickSort body){
        int[] result = quickSortService.isQuickSort(body.getNumeros());
        return result;
    }

    @PostMapping("/mdc")
    public int mdcTeste(@RequestBody MaxDivCom body){
        int result = maxDivComService.isMDC(body.getNum1(), body.getNum2());
        return result;
    }
}
