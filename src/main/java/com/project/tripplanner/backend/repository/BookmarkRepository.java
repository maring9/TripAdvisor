package com.project.tripplanner.backend.repository;

import com.project.tripplanner.backend.model.Bookmark;
import com.project.tripplanner.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BookmarkRepository extends JpaRepository<Bookmark,Long> {
    List<Bookmark> findByUserId(long userId);

    @Query(value = "SELECT * from bookmarks b where b.user_id !=:user_id",
    nativeQuery = true)
    List<Bookmark> getAllBookmarks(@Param("user_id") long userId);
}

//    @Query("select t from TableName t where (status = :status1 and num = :num1 or status = :status2 and num = :num2)")
//    List<TableName> findByStatusAndNumOrStatusAndNum(@Param("status1") String status1,
//                                                     @Param("num1") Integer num1, @Param("status2") String status2, @Param("num2") Integer num2);
//}