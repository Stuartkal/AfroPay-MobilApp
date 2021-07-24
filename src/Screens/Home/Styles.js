import { StyleSheet } from 'react-native';
import Color from '../../constants/Color';

const Styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Color.main,
  },
  balanceCard: {
    marginTop: 40,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    width: '80%',
    height: 100,
    elevation: 1,
    // borderRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    backgroundColor: '#fff',
  },

  balanceRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  label1: {
    fontSize: 18,
  },
  label2: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: 5,
    color: Color.secondary,
  },
  label3: {
    color: Color.txtFaint,
  },

  homeRow: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '75%',
    flexDirection: 'row',
  },
  service: {
    width: '90%',
    alignItems: 'center',
  },
  serviceCard: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    height: 120,
    width: '45%',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    backgroundColor: '#fff',
  },
  serviceTxtRow: {
    width: '75%',
    alignItems: 'flex-start',
  },
  serviceTxt: {
    fontSize: 20,
  },
  serviceTxt2: {
    fontSize: 20,
  },
});

export default Styles;
