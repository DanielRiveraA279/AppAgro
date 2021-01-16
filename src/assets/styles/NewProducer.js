const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F2F2F2', 
 
  },

  header_title: {
    justifyContent: 'flex-start',
  },

  SectionLeft: {
    flex: 1,
    flexDirection: 'row',
  },

  SectionRight: {
    flexDirection: 'column',
    width: '100%',
    padding: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  SectionRight__button: {
    marginTop: '1%',
    marginBottom: '1%',
  },
  header: {
    height: 55,
    padding: 10,
    width: '100%',
    backgroundColor: '#000',
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lblContainer: {
    marginTop: 30,
    padding: 10,
    paddingLeft: 5,
    width: 100,
  },
  estiloTitulo: {
    color: '#333366',
    fontSize: 15,
    alignItems: 'center',
    alignContent: 'center',
    fontWeight: 'bold',
  },
  TextInput: {
    width: '100%',
  },
  checkboxContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flexDirection: 'row-reverse',
  },
  snackBar: {
    flex: 1,
    justifyContent: 'space-between',
  },
};

export default styles;
