import database_common


@database_common.connection_handler
def get_data_from_sql(cursor):
    query = """
            SELECT * FROM scores 
            """
    cursor.execute(query)
    return cursor.fetchall()

@database_common.connection_handler
def write_data_in_scores(cursor, name, score):
    query = """"
    sql.SQL(INSERT INTO (name,score) VALUES (name, score).format( name=name, score=score))
    """
    cursor.execute(query)
