package game.model;


import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;


@JsonDeserialize(as = Score.class)
public class Score {
    private String name;
    private Integer score;

    public Score() {}

    public Score(String name, Integer score) {
        this.name   = name;
        this.score  = score;
    }

    public Score(Score podium) {
        this.name   = podium.getName();
        this.score  = podium.getScore();
    }

    @JsonProperty("name")
    public String getName() {
        return this.name;
    }

    @JsonProperty("name")
    public void setName(String name) {
        this.name = name;
    }

    @JsonProperty("score")
    public Integer getScore() {
        return this.score;
    }
    @JsonProperty("score")
    public void setScore(Integer score) {
        this.score = score;
    }
}
