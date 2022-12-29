package com.railolog.lab3;


import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import java.io.Serializable;

@ManagedBean(name = "navigationController")
@RequestScoped
public class NavigationController implements Serializable {
    public String processHomePage() {
        return "form";
    }

    public String processFormPage() {
        return "index";
    }
}
