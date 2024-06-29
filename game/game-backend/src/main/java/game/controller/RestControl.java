package game.controller;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;

import game.model.Grid;
import game.model.GridDTO;
import game.model.Score;



@RestController
@RequestMapping("api/game/")

public class RestControl {

    ObjectMapper objectMapper = new ObjectMapper();
    ObjectWriter objectWriter = objectMapper.writerWithDefaultPrettyPrinter();
    String filePath = "src/grids.json";


    @GetMapping(path = "grids")
    public List<Grid> getGridList() throws IOException, URISyntaxException{
        List<Grid> grids = new ArrayList<>();
        try{
            grids = objectMapper.readValue(new File(filePath), new TypeReference<List<Grid>>() {});
        } catch (IOException e){
            e.printStackTrace();
        }
        return grids;
    }

    @GetMapping(path = "grid/{id}")
    public Optional<Grid> getGridById(@PathVariable("id") Integer id) throws Exception{
        List<Grid> grids = new ArrayList<>();
        try{
            grids = objectMapper.readValue(new File(filePath), new TypeReference<List<Grid>>() {});
        } catch(IOException e){
            e.printStackTrace();
        }
        Optional<Grid> grid = grids.stream()
                .filter(gri -> gri.getId().equals(id))
                .findFirst();
        if(grid.isPresent()){
            return grid;
        }
        throw new Exception("La grille demandée n'est pas présente") ;
    }

    //Renvoie la grilleDTO avec seulement les cellules correspondant à un id
    @GetMapping(path = "gridDTO/{id}")
    public GridDTO getGridByIdDTO(@PathVariable("id") Integer id) throws Exception{
        List<Grid> grids = new ArrayList<>();
        try{
            grids = objectMapper.readValue(new File(filePath), new TypeReference<List<Grid>>() {});
        } catch(IOException e){
            e.printStackTrace();
        }
        Optional<Grid> grid = grids.stream()
                                    .filter(gri -> gri.getId().equals(id))
                                    .findFirst();
        if(grid.isPresent()){
            GridDTO gridDTO = new GridDTO(grid.get());
            return gridDTO;
        }
        throw new Exception("La grille demandée n'est pas présente") ;
    }

    //Renvoie le podium de la grid correspondant à un id
    @GetMapping(path = "grid/podium/{id}")
    public List<Score> getPodiumById(@PathVariable("id") Integer id) throws IOException, URISyntaxException{
        List<Grid> grids = new ArrayList<>();
        try{
            grids = objectMapper.readValue(new File(filePath), new TypeReference<List<Grid>>() {});
        }catch(IOException e){
            e.printStackTrace();
        }
        Optional<Grid> grid = grids.stream()
                                    .filter(gr -> gr.getId().equals(id))
                                    .findFirst();
        return grid.get().getPodium();
    }

    //Récupère une nouvelle grille générée aléatoirement dans le Front et l'ajoute à la liste de grille
    @PostMapping(path = "generated")
    public Grid postGeneratedGrid(@RequestBody Grid grid)throws IOException, URISyntaxException{
        List<Grid> grids = new ArrayList<>();
        try{
            grids = objectMapper.readValue(new File(filePath), new TypeReference<List<Grid>>() {});
        }catch(IOException e){
            e.printStackTrace();
        }
        grid.setId(grids.size()+1);
        grids.add(grid);
        objectWriter.writeValue(new File(filePath), grids);
        return grid;
    }

    
    //Pour une grille d'identifiant id, cette méthode ajoute le podium de "name" avec un "score" dans la liste des podiums
    @PostMapping(path = "podium/{id}/{name}/{score}")
    public Score postScore(@PathVariable("id") Integer id, @PathVariable("name") String name, @PathVariable("score") Integer score) throws IOException{
        List<Grid> grids = new ArrayList<>();
        try{
            grids = objectMapper.readValue(new File(filePath), new TypeReference<List<Grid>>() {});
        }catch(IOException e){
            e.printStackTrace();
        }
        Optional<Grid> grid = grids.stream()
                .filter(gr -> gr.getId().equals(id))
                .findFirst();

        updateScore(grid.get().getPodium(), name, score);
        //Ajouter la grille dans la liste de grille
        grids.set(id-1,grid.get());
        objectWriter.writeValue( new File(filePath), grids);
        return new Score(name, score);
    }

    public static void updateScore(List<Score> scores, String name, int newScore) {
        Optional<Score> opt = scores.stream()
                .filter(s -> s.getName().equals(name))
                .findFirst();
        if (opt.isPresent()) {
            Score score = opt.get();
            if (newScore < score.getScore()) {
                score.setScore(newScore);
            }
        } else {
            scores.add(new Score(name, newScore));
        }
    }

}

