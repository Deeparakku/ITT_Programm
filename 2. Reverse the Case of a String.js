import java.util.*;
public class Main{
    public static void main(String[] args){
        Scanner s = new Scanner(System.in);
        String str = s.nextLine();
        String result="";
        //System.out.println(str);
       // String name = str.toLowerCase();
       for(int i=0; i<str.length(); i++){
           char ch = str.charAt(i);
           if(Character.isUpperCase(ch)){
               result += Character.toLowerCase(ch);
           }else if(Character.isLowerCase(ch)){
               result += Character.toUpperCase(ch);
           }else{
               result += ch; 
           }
            System.out.println(result);
       }
    }
}
       
          
          
       
        

