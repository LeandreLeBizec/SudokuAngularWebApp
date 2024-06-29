package game.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;



@JsonDeserialize(as = Grid.class)
public class Grid {
    private Integer id;
    private Level level;
    private Integer[] cells;
    private List<Score> podium;

    @JsonProperty("id")
    public Integer getId() {
        return id;
    }

    @JsonProperty("id")
    public void setId(Integer id) {
        this.id = id;
    }

    @JsonProperty("level")
    public Level getLevel() {
        return level;
    }

    @JsonProperty("level")
    public void setLevel(Level level) {
        this.level = level;
    }

    @JsonProperty("cells")
    public Integer[] getCells() {
        return cells;
    }

    @JsonProperty("cells")
    public void setCells(Integer[] cells) {
        this.cells = cells;
    }

    @JsonProperty("podium")
    public List<Score> getPodium() {
        return podium;
    }

    @JsonProperty("podium")
    public void setPodium(List<Score> pod) {
        this.podium =pod;
    }
    
    public Grid(){}

    
}


