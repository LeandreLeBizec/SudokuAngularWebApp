package web.model;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;


import game.model.Grid;
import game.model.Level;
import game.model.Score;


public class TestGrid {

    Grid grid;

    @BeforeEach
    void setUp(){
        this.grid = new Grid();
    }
    
    @Test
    public void testGettersAndSettersId(){
        grid.setId(1);
        assertEquals(1, grid.getId().intValue());
    }
    @Test
    public void testGettersAndSettersLevel(){
        grid.setLevel(Level.easy);
        assertEquals(Level.easy, grid.getLevel());
    }
    @Test
    public void testGettersAndSettersCells(){
        Integer[] cells = {1, 2, 3, 4, 5, 6, 7, 8, 9};
        grid.setCells(cells);
        assertEquals(cells, grid.getCells());
    }
    @Test
    public void testGettersAndSettersPodiums(){
        List<Score> podiums = Arrays.asList(new Score( "player1", 100), new Score( "player2", 90));       
        grid.setPodium(podiums);
        assertEquals(podiums, grid.getPodium());
    }
}
