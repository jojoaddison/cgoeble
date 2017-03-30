package net.jojoadison.cgserver.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.ZonedDateTime;

/**
 * Created by kojo on 29/03/17.
 */

@Document(collection = "home")
public class Home {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Field("current")
    private boolean current;

    @Field("content")
    private String content;

    @Field("type")
    private String type;

    @Field("version")
    private int version;

    @Field("created")
    private ZonedDateTime createdDate;

    @Field("modified")
    private ZonedDateTime modifiedDate;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public boolean getCurrent() {
        return current;
    }

    public void setCurrent(boolean isCurrent) {
        this.current = isCurrent;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getVersion() {
        return version;
    }

    public void setVersion(int version) {
        this.version = version;
    }

    public ZonedDateTime getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(ZonedDateTime createdDate) {
        this.createdDate = createdDate;
    }

    public ZonedDateTime getModifiedDate() {
        return modifiedDate;
    }

    public void setModifiedDate(ZonedDateTime modifiedDate) {
        this.modifiedDate = modifiedDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Home)) return false;

        Home home = (Home) o;

        return getId().equals(home.getId());

    }

    @Override
    public int hashCode() {
        return getId().hashCode();
    }

    @Override
    public String toString() {
        return "Home{" +
            "id='" + id + '\'' +
            ", isCurrent=" + current +
            ", version=" + version +
            '}';
    }
}
