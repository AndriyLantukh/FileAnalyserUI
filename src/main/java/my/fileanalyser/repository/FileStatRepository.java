package my.fileanalyser.repository;

import my.fileanalyser.model.FileStat;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FileStatRepository extends CrudRepository<FileStat, Integer> {
}