package arrays;

import java.io.*;
import java.util.*;

class FixedArray {
  public static void main(String[] args) {
      // Compiles and runs fine
      int[] array = new int[0];

      try {
          // Throws java.lang.ArrayIndexOutOfBoundsException
          array[0] = 1;
      } catch (Exception e) {
          System.out.println(e);
      }

      try {
          // Throws java.lang.NegativeArraySizeException
          int[] arr = new int[-1];
      } catch (Exception e) {
          System.out.println(e);
      }

      String[] suit = {
          "spades",
          "hearts",
          "diamonds",
          "clubs"
      };

      // Should print 4 in this case
      System.out.println(suit.length);
  }
}