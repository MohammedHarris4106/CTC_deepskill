package Singleton;

public class tester {
    public static void main(String[] args){
        logger l1=logger.getInstance();
        logger l2=logger.getInstance();
        l1.log("App Started");
        l2.log("App running");
        System.out.println(l1);
        System.out.println(l2);
        if(l1==l2){
            System.out.println("Both l1 and l2 assigned to a same instance ");
        }
        else{
            System.out.println("not assigned to same object so memory becomes large dynamically");
        }

    }
        
}