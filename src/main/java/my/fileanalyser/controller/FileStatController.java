package my.fileanalyser.controller;

import lombok.Data;
import my.fileanalyser.model.FileStat;
import my.fileanalyser.repository.FileStatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class FileStatController {

    @Autowired
    FileStatRepository fileStatRepo;

    @RequestMapping("/files")
    public List<FileStat> getfileStats() {
        List<FileStat> fileStats = new ArrayList<>();
        fileStatRepo.findAll().forEach(order -> fileStats.add(order));
        return fileStats;
    }

    @RequestMapping(value = "/files/add", method = RequestMethod.POST, consumes = "application/json; charset=UTF-8")
    public FileStat addFileStat(@RequestBody FileStatReq p) {
        FileStat newFileStat = new FileStat(p.getFileName(), p.getLongest(), p.getShortest(), p.getAvLineLen(), p.getAvWordLen());
        return fileStatRepo.save(newFileStat);
    }
}

@Data
class FileStatReq {
    private String fileName;
    private String longest;
    private String shortest;
    private Integer avLineLen;
    private Integer avWordLen;
}


