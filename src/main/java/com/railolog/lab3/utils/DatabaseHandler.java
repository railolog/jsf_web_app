package com.railolog.lab3.utils;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import java.util.ArrayList;
import java.util.List;

public class DatabaseHandler {
    /*private static EntityManagerFactory factory = Persistence.createEntityManagerFactory("dot");
    private static EntityManager entityManager = factory.createEntityManager();
    private static List<Dot> dotList = new ArrayList<>();*/
    private SessionFactory sessionFactory = HibernateSessionFactory.getSessionFactory();
    private List<Dot> dotList = new ArrayList<>();

    public DatabaseHandler(){
    }
    public void addDot(Dot dot){
        Session session = sessionFactory.getCurrentSession();
        session.beginTransaction();
        session.persist(dot);
        session.getTransaction().commit();
    }

    public List<Dot> getDotList() {
        if (sessionFactory == null){
            System.out.println("factory is null");
        }
        Session session = sessionFactory.getCurrentSession();
        session.beginTransaction();
        dotList = session.createQuery("From Dot ").list();
        session.getTransaction().commit();
        return dotList;
    }
}
