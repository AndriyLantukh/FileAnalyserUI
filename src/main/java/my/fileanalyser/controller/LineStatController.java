package my.fileanalyser.controller;

import lombok.Data;
import my.fileanalyser.model.LineStat;
import my.fileanalyser.repository.LineStatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
public class LineStatController {

    @Autowired
    LineStatRepository lineStatRepo;

    @RequestMapping(value = "/file/lines")
    public List<LineStat> getLinesForFile() {
        List<LineStat> lineStats = new ArrayList<>();
        lineStatRepo.findAll().forEach(user -> lineStats.add(user));
        return lineStats;
    }

//    @RequestMapping(value = "/file/lines/add", method = RequestMethod.POST, consumes = "application/json; charset=UTF-8")
//    public User addUser(@RequestBody UserReq c) {
//        User user = new User(c.getLogin(), c.getPassword(), c.getRole());
//        return userRepo.save(user);
//    }

    @RequestMapping("/lines/{id}")
    public List<LineStat> getUser(@PathVariable int id) {
        List<LineStat> lineStats = new ArrayList<>();
        lineStatRepo.findByFileId(id).forEach(user -> lineStats.add(user));
        return lineStats;
    }

//    @RequestMapping(value = "/users/delete/{id}",  method = RequestMethod.POST)
//    public void deleteUser(@PathVariable long id) {
//        userRepo.delete(id);
//    }

}

@Data
class UserReq {
    private String login;
    private String password;
    private String role;
}
