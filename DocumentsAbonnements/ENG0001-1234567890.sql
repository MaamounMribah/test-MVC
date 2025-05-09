/************************************ Article Gamme ***********************************/

SELECT * FROM P_GAMME 

SELECT * FROM F_ENUMGAMME WHERE EG_Champ =9 OR EG_Champ =8

select AR_Ref ,AR_Design ,AR_Type ,AR_Gamme1 ,AR_Gamme2  from f_article where AR_Ref ='STYLO2'

select * from F_ARTGAMME where  AR_Ref ='STYLO2'

select * from F_ARTENUMREF  where  AR_Ref ='STYLO2'

select AR_Ref ,DL_Design ,DL_Qte ,DL_PrixUnitaire ,DL_MontantHT ,AG_No1 ,AG_No2  from f_docligne where do_piece='C1812828' and do_type=0

select * from F_ARTSTOCK where AR_Ref ='STYLO'
select * from F_GAMSTOCK where AR_Ref ='STYLO'

select * from F_ARTPRIX





select FCP_ComptaCPT_Taxe1 from F_FAMCOMPTA where FA_CodeFamille= 'ZDIVERS'
select * from F_ARTCOMPTA where AR_Ref= 'STYLO2'


select DL_CodeTaxe1 from F_DOCLIGNE