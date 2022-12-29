package com.railolog.lab3.beans;

import com.railolog.lab3.utils.DatabaseHandler;
import com.railolog.lab3.utils.Dot;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;

public class DotsHandler {
    public Dot dot = new Dot();
    private final DatabaseHandler databaseHandler = new DatabaseHandler();
    public List<Dot> dotList = databaseHandler.getDotList();
    public DotsHandler() {
    }

    public Dot getDot() {
        return dot;
    }

    public void setDot(Dot dot) {
        this.dot = dot;
    }

    public void addDot(){
        long startTime = System.nanoTime();
        dot.setInArea(dot.checkArea());
        dot.setCreationDate(new Date());
        dot.setExecTime((double)(System.nanoTime() - startTime) / 1000000);
        dotList.add(dot);

        databaseHandler.addDot(dot);

        dot = new Dot();
    }

    public List<Dot> getDotList() {
        return dotList;
    }

    public void setDotList(List<Dot> dotList) {
        this.dotList = dotList;
    }
}
