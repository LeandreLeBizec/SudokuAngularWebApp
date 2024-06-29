package web.model;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

import game.model.Level;


public class TestLevel {
    @Test
    public void testValues() {
        assertEquals("easy", Level.easy.toString());
        assertEquals("medium", Level.medium.toString());
        assertEquals("hard", Level.hard.toString());
        assertEquals("very_hard", Level.very_hard.toString());
        assertEquals("insane", Level.insane.toString());
        assertEquals("inhuman", Level.inhuman.toString());
    }
    //Pas certaine de la nécessite de tester la méthode valueOf et celles d'après
    @Test
    public void testValueOf() {
        assertEquals(Level.easy, Level.valueOf("easy"));
        assertEquals(Level.medium, Level.valueOf("medium"));
        assertEquals(Level.hard, Level.valueOf("hard"));
        assertEquals(Level.very_hard, Level.valueOf("very_hard"));
        assertEquals(Level.insane, Level.valueOf("insane"));
        assertEquals(Level.inhuman, Level.valueOf("inhuman"));
    }
    @Test
    public void testValuesInArray() {
        assertArrayEquals(new Level[]{Level.easy, Level.medium, Level.hard, Level.very_hard, Level.insane, Level.inhuman}, Level.values());
    }
    @Test
    public void testToString() {
        assertEquals("easy", Level.easy.toString());
        assertEquals("medium", Level.medium.toString());
        assertEquals("hard", Level.hard.toString());
        assertEquals("very_hard", Level.very_hard.toString());
        assertEquals("insane", Level.insane.toString());
        assertEquals("inhuman", Level.inhuman.toString());
    }

}
