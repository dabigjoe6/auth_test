import {colors} from '../../config';

const styles = {
  container: {
    width: '100%',
    height: 50,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 4,
  },
  transparentContainer: {
    width: '100%',
    height: 50,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  title: {
    color: 'white',
    fontSize: 16,
  },
  transparentTitle: {
    color: colors.primary,
  },
};

export default styles;
