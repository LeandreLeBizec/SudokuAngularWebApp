package game.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class GridDTO {
    private Integer[] cells;
    private List<Score> podium;
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
    public GridDTO( Grid grid){
        this.cells= grid.getCells();
        this.podium = grid.getPodium();
    }
}
