package my.fileanalyser.model;

import lombok.*;
import javax.persistence.*;

@Data
@RequiredArgsConstructor
@ToString
@Entity
@Table(name = "linestat")
public class LineStat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "fileid")
    private Integer fileId;

    @Column(name = "longest")
    private String longestWord;

    @Column(name = "shortest")
    private String shortestWord;

    @Column(name = "linelen")
    private int lineLength;

    @Column(name = "averagelen")
    private int averageWordLength;
}



