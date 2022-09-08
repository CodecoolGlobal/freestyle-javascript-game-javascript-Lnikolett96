import database_common


@database_common.connection_handler
def get_data_from_sql(cursor):
    query = """
            SELECT * FROM scores 
            """
    cursor.execute(query)
    return cursor.fetchall()


@database_common.connection_handler
def write_name_in_scores(cursor, name):
    cursor.execute("""
    INSERT INTO scores (username)
    VALUES (%(n)s)""",
                   {'n': name})
