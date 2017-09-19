package my.fileanalyser.repository;

import my.fileanalyser.model.LineStat;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface LineStatRepository extends CrudRepository<LineStat, Integer> {

    public List<LineStat> findByFileId(Integer fileId);

}
