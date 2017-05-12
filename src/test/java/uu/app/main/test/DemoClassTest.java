package uu.app.main.test;

import org.junit.Assert;
import org.junit.Test;
import uu.app.main.DemoClass;

/**
 * Created by velef on 11.05.2017.
 */
public class DemoClassTest {

    @Test
    public void testGreet() {
        DemoClass demoClass = new DemoClass();
        String result = demoClass.greet("Filip");
        Assert.assertEquals("Hello Filip", result);
    }

}
