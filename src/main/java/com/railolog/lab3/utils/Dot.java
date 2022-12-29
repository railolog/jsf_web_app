package com.railolog.lab3.utils;

/*import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;*/
import jakarta.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "dots_railolog")
public class Dot implements Serializable {
    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private Long id = 1L;
    @Column
    private double x;
    @Column
    private double y;
    @Column
    private double r;
    @Column
    private Date creationDate;
    @Column
    private boolean inArea;
    @Column
    private double execTime;
    @Column
    private String hit;
    public Dot() {}

    public boolean checkArea(){
        boolean lt = (x <= 0 && x >= -r) && (y >= 0 && y <= r);
        boolean rb = (x >= 0 && y <= 0) && (x*x + y*y <= r*r/4);
        boolean lb = (y >= -x -r/2) && (x <= 0 && y <= 0);

        return  lt || rb || lb;
    }

    public Long getId() {
        return id;
    }

    public void setX(double x) {
        this.x = x;
    }

    public void setY(double y) {
        this.y = y;
    }

    public void setR(double r) {
        this.r = r;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public void setInArea(boolean inArea) {
        this.inArea = inArea;
    }

    public void setExecTime(double execTime) {
        this.execTime = execTime;
    }

    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    public double getR() {
        return r;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public boolean isInArea() {
        return inArea;
    }

    public double getExecTime() {
        return execTime;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setHit(String hit) {
        this.hit = hit;
    }

    public String getHit(){
        if (isInArea()){
            return "Hit";
        }
        return "Miss";
    }
}
