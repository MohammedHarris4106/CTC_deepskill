package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.Country;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);

    @RequestMapping("/country")
    public Country getCountryIndia(){
    LOGGER.info("Start CountryController");
    ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
    Country country = context.getBean("Country", Country.class);
    LOGGER.debug("end of helloController");
    return country;
    }

    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code){
        LOGGER.info("Start CountryController");
        return countryservice.getCountry(code);

    }
    
}
