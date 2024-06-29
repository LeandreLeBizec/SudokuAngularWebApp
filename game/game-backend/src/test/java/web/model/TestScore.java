package web.model;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

import game.model.Score;

public class TestScore {
    
    @Test
    public void testGettersAndSettersName() {
        Score score = new Score();
        score.setName("player1");
        assertEquals("player1", score.getName());
    }
    @Test
    public void testGettersAndSettersScore() {
        Score score = new Score();
        score.setScore(100);
        assertEquals(100, score.getScore().intValue());
    }
}
