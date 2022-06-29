/**
 * 
 */
package eclipsetest;

import java.util.ArrayList;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * @author bdine
 *
 */
public class Helloworld {

	/**
	 * @param args
	 */
	public static void main(String[] args) {

		ArrayList<String> classCallList = new ArrayList<String>();
		classCallList.add("web");
		classCallList.add("jar");
		classCallList.add("war");
		classCallList.add("des");
		classCallList.add("jar1");
		classCallList.add("war1");
		classCallList.add("des1");
		classCallList.add("jar2");
		classCallList.add("war2");
		classCallList.add("des2");
		classCallList.add("jar3");
		classCallList.add("war3");
		classCallList.add("des3");
		int count = 2;
		int jarSize = classCallList.size();
		int num = 0;
		ExecutorService executorService = Executors.newFixedThreadPool(count);

		for (int i = 0; i < classCallList.size();) {
			if (jarSize - 3 >= 0) {
				num = 3;
			} else if (jarSize - 1 == 0) {
				num = 1;
			} else if (jarSize - 2 == 0) {
				num = 2;
			}
			switch (num) {
			case 3:
				Runnable r = new Runnable() {

					private String myParam;

					public Runnable init(String myParam) {
						this.myParam = myParam;
						return this;
					}

					@Override
					public void run() {
						System.out.println(this.myParam);

					}
				}.init(classCallList.get(i));
				executorService.execute(r);
				i++;
				jarSize--;
			case 2:
				Runnable r1 = new Runnable() {

					private String myParam;

					public Runnable init(String myParam) {
						this.myParam = myParam;
						return this;
					}

					@Override
					public void run() {
						System.out.println(this.myParam);

					}
				}.init(classCallList.get(i));
				executorService.execute(r1);
				i++;
				jarSize--;
			case 1:
				Runnable r2 = new Runnable() {

					private String myParam;

					public Runnable init(String myParam) {
						this.myParam = myParam;
						return this;
					}

					@Override
					public void run() {
						System.out.println(this.myParam);

					}
				}.init(classCallList.get(i));
				executorService.execute(r2);
				i++;
				jarSize--;
			}
		}
		executorService.shutdown();

	}

}
