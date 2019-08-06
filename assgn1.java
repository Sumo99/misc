/*
1. Write a program to find greatest among three numbers
taken at run time.
2. Write a program to take a number at run time and
reverse it. Ex. 1234 should be 4321
3. Write a Program to check if a given number if even
or odd.
4. Write a program to take any number at run time and
print name of the day if number in in range 1-7.
5. Write a program which will have three methods, one
which take input at run time and other compute
multiplication and the third prints the result.
*/
//number 5 soln
import java.util.*;
public class Demo{
    public static int takeInput(){
        Scanner sc1=new Scanner(System.in);
        return sc1.nextInt();
    }
    public static int mult(int a,int b){
        return a*b;
    }
    public static void printNum(int a){
        System.out.println();
        System.out.println(a);
    }
    public static void main(String[] args){ //line No 2
        int a1=takeInput();
        int a2=takeInput();
        printNum(mult(a1,a2));
    }
}
/*import java.util.*;
public class Demo{ //number four solution
    public static void main(String[] args){ //line No 2
        final String[] daysofwk={"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"};
        Scanner sc1=new Scanner(System.in);
        int a1=sc1.nextInt();
        System.out.println();
        System.out.println(daysofwk[a1-1]);
    }
}
*/
 */
/*import java.util.*;
public class Demo{ //number three soln
    public static void main(String[] args){ //line No 2
        Scanner sc1=new Scanner(System.in);
        int a1=sc1.nextInt();
        System.out.println();
        System.out.println(a1%2==0 ? "Even": "Odd");
    }
}
*/
/*
import java.util.*;
public class Demo{ //number two soln
    public static void main(String[] args){ //line No 2
        Scanner sc1=new Scanner(System.in);
        int a1=sc1.nextInt();
        System.out.println();
        int reversed=0;
        while(a1 != 0) {
            int digit = a1 % 10;
            reversed = reversed * 10 + digit;
            a1 /= 10;
        }
        System.out.println(reversed);
    }
}
*/
/*import java.util.*;
public class Demo{ //number one soln
    public static void main(String[] args){ //line No 2
        Scanner sc1=new Scanner(System.in);
        int a1=sc1.nextInt();
        int a2=sc1.nextInt();
        int a3=sc1.nextInt();
        System.out.println()
        System.out.println(Math.max(Math.max(a1,a2),a3)); //print out the maximum of three nums, Math.max() only acc 2 args
    }
}
*/
