package my.fileanalyser.model;

import lombok.*;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "filestat")
public class FileStat {

    public FileStat(String fileName, String longest, String shortest, Integer avLineLen, Integer avWordLen) {
        this.fileName = fileName;
        this.longestWord = longest;
        this.shortestWord = shortest;
        this.averageLineLength = avLineLen;
        this.averageWordLength = avWordLen;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "filename")
    private String fileName;

    @Column(name = "longest")
    private String longestWord;

    @Column(name = "shortest")
    private String shortestWord;

    @Column(name = "avlinelen")
    private int averageLineLength;

    @Column(name = "avwordlen")
    private int averageWordLength;
}


