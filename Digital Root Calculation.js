import java.util.*;
public class Main{
    public static int digit(int n){
    int sum = 0;
    while(n>0){
        int ld= n%10;
        sum+=ld;
        n=n/10;
    }
    return sum;
    }
    public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      int num = sc.nextInt();
      int sum1 = digit(num);
      if(sum1>=-9 && sum1<= 9){
        System.out.println(sum1); 
      }else{
        int sum2 = digit(sum1);
        System.out.println(sum2); 
      }
    }
}
      
    
